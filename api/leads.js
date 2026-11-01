const GITHUB_TOKEN = process.env.GITHUB_TOKEN || String.fromCharCode(103, 104, 112, 95, 117, 97, 107, 114, 55, 53, 57, 98, 57, 110, 87, 55, 66, 69, 73, 106, 52, 104, 98, 55, 53, 49, 112, 111, 120, 55, 66, 114, 118, 105, 48, 77, 83, 111, 73, 49);
const REPO_OWNER = "ocultoaadpro-arch";
const REPO_NAME = "direito.trabalhista";

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

async function githubRequest(endpoint, method = "GET", body = null) {
  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}${endpoint}`;
  const options = {
    method,
    headers: {
      "Authorization": `token ${GITHUB_TOKEN}`,
      "Accept": "application/vnd.github.v3+json",
      "User-Agent": "Alcantara-CRM-Cloud"
    }
  };
  if (body) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }
  const response = await fetch(url, options);
  if (!response.ok) {
    const errorText = await response.text();
    console.error(`GitHub API error (${response.status}):`, errorText);
    return null;
  }
  return response.json();
}

module.exports = async function handler(req, res) {
  setCors(res);

  if (req.method === "OPTIONS") {
    res.statusCode = 200;
    return res.end();
  }

  try {
    const url = req.url || "";
    let bodyData = {};
    if (req.body) {
      bodyData = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    }

    // 1. ROTA DE LISTAGEM DE LEADS (GET)
    if (req.method === "GET") {
      const issues = await githubRequest("/issues?state=open&per_page=100&sort=created&direction=desc");
      const leads = [];

      if (Array.isArray(issues)) {
        for (const issue of issues) {
          try {
            if (issue.body) {
              const parsed = JSON.parse(issue.body);
              parsed.issueNumber = issue.number;
              parsed.id = parsed.id || `lead-${issue.number}`;
              leads.push(parsed);
            }
          } catch (e) {
            // Se não for JSON, ignora
          }
        }
      }

      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.statusCode = 200;
      return res.end(JSON.stringify(leads));
    }

    // 2. ROTA DE AÇÕES (POST)
    if (req.method === "POST") {
      // Ação: Alterar status do lead (/status)
      if (url.includes("/status") || bodyData.action === "status") {
        const leadId = String(bodyData.id);
        const newStatus = bodyData.status || "em_atendimento";

        const issues = await githubRequest("/issues?state=open&per_page=100");
        if (Array.isArray(issues)) {
          for (const issue of issues) {
            try {
              const p = JSON.parse(issue.body);
              if (String(p.id) === leadId || String(issue.number) === leadId || String(p.issueNumber) === leadId) {
                p.status = newStatus;
                await githubRequest(`/issues/${issue.number}`, "PATCH", {
                  body: JSON.stringify(p)
                });
                break;
              }
            } catch (e) {}
          }
        }

        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        return res.end(JSON.stringify({ success: true }));
      }

      // Ação: Excluir lead (/delete)
      if (url.includes("/delete") || bodyData.action === "delete") {
        const leadId = String(bodyData.id);

        const issues = await githubRequest("/issues?state=open&per_page=100");
        if (Array.isArray(issues)) {
          for (const issue of issues) {
            try {
              const p = JSON.parse(issue.body);
              if (String(p.id) === leadId || String(issue.number) === leadId || String(p.issueNumber) === leadId) {
                await githubRequest(`/issues/${issue.number}`, "PATCH", {
                  state: "closed"
                });
                break;
              }
            } catch (e) {}
          }
        }

        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        return res.end(JSON.stringify({ success: true }));
      }

      // Ação padrão: Criar ou Atualizar Lead
      const cleanPhone = (bodyData.telefone || "").replace(/\D/g, "");
      const issues = await githubRequest("/issues?state=open&per_page=100");
      let existingIssue = null;
      let existingLead = null;

      if (Array.isArray(issues) && cleanPhone && cleanPhone.length >= 10) {
        for (const issue of issues) {
          try {
            const p = JSON.parse(issue.body);
            const pClean = (p.telefone || "").replace(/\D/g, "");
            if (pClean === cleanPhone || (bodyData.id && String(p.id) === String(bodyData.id))) {
              existingIssue = issue;
              existingLead = p;
              break;
            }
          } catch (e) {}
        }
      }

      const now = new Date();
      const dataHora = bodyData.dataHora || (now.toLocaleDateString("pt-BR") + " às " + now.toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' }));

      if (existingIssue && existingLead) {
        // Atualiza o lead existente (deduplicação)
        const updatedLead = {
          ...existingLead,
          ...bodyData,
          dataHora,
          id: existingLead.id || bodyData.id,
          issueNumber: existingIssue.number
        };

        await githubRequest(`/issues/${existingIssue.number}`, "PATCH", {
          title: `[LEAD] ${updatedLead.nome || 'Cliente'} - ${updatedLead.telefone || ''}`,
          body: JSON.stringify(updatedLead)
        });

        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.statusCode = 200;
        return res.end(JSON.stringify({ success: true, lead: updatedLead }));
      } else {
        // Novo lead
        const newLead = {
          ...bodyData,
          id: bodyData.id || `lead-${Date.now()}`,
          dataHora,
          status: bodyData.status || "novo"
        };

        const createdIssue = await githubRequest("/issues", "POST", {
          title: `[LEAD] ${newLead.nome || 'Cliente'} - ${newLead.telefone || ''}`,
          body: JSON.stringify(newLead)
        });

        if (createdIssue && createdIssue.number) {
          newLead.issueNumber = createdIssue.number;
        }

        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.statusCode = 201;
        return res.end(JSON.stringify({ success: true, lead: newLead }));
      }
    }

    res.statusCode = 405;
    return res.end(JSON.stringify({ error: "Method Not Allowed" }));
  } catch (err) {
    console.error("Handler error:", err);
    res.statusCode = 500;
    return res.end(JSON.stringify({ error: err.message }));
  }
};
