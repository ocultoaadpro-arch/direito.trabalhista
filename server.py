#!/usr/bin/env python3
"""
Servidor HTTP & API de Leads (Zero Dependências Externas)
Alcântara & Diamantino Advocacia - Sistema de Captação e Painel Administrativo
"""

import os
import json
import mimetypes
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
from datetime import datetime

PORT = 8080
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
LEADS_FILE = os.path.join(BASE_DIR, "leads.json")

# Garantir que o arquivo leads.json exista
if not os.path.exists(LEADS_FILE):
    with open(LEADS_FILE, "w", encoding="utf-8") as f:
        # Iniciar com alguns leads de demonstração para o cliente visualizar imediatamente
        sample_leads = [
            {
                "id": "lead-1",
                "nome": "Carlos Eduardo Ribeiro",
                "telefone": "(11) 98845-1230",
                "assunto": "Rescisão Indireta / FGTS em atraso",
                "dataHora": datetime.now().strftime("%d/%m/%Y às %H:%M"),
                "status": "novo",
                "origem": "Anúncio Google Ads"
            },
            {
                "id": "lead-2",
                "nome": "Mariana Souza Alcantara",
                "telefone": "(11) 97120-4498",
                "assunto": "Estabilidade Gestante / Desligamento",
                "dataHora": datetime.now().strftime("%d/%m/%Y às %H:%M"),
                "status": "em_atendimento",
                "origem": "Anúncio Meta Ads"
            }
        ]
        json.dump(sample_leads, f, ensure_ascii=False, indent=2)

def get_leads():
    try:
        with open(LEADS_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return []

def save_leads(leads):
    with open(LEADS_FILE, "w", encoding="utf-8") as f:
        json.dump(leads, f, ensure_ascii=False, indent=2)

class CustomHandler(BaseHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)

        # Rota da API de Leads
        if parsed.path == "/api/leads":
            leads = get_leads()
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.end_headers()
            self.wfile.write(json.dumps(leads, ensure_ascii=False).encode("utf-8"))
            return

        # Rota de atalho para o painel admin (/admin -> admin.html)
        filepath = parsed.path.lstrip("/")
        if filepath == "" or filepath == "admin":
            filepath = "admin.html" if filepath == "admin" else "index.html"

        full_path = os.path.join(BASE_DIR, filepath)

        if os.path.isfile(full_path):
            mime_type, _ = mimetypes.guess_type(full_path)
            mime_type = mime_type or "application/octet-stream"
            
            self.send_response(200)
            self.send_header("Content-Type", mime_type)
            self.end_headers()
            with open(full_path, "rb") as f:
                self.wfile.write(f.read())
        else:
            self.send_response(404)
            self.send_header("Content-Type", "text/plain; charset=utf-8")
            self.end_headers()
            self.wfile.write(b"404 - Arquivo nao encontrado")

    def do_POST(self):
        parsed = urlparse(self.path)

        # Salvar novo lead
        if parsed.path == "/api/leads":
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length).decode("utf-8")
            
            try:
                new_lead = json.loads(body)
                leads = get_leads()

                # Atribuir ID e Data/Hora
                new_lead["id"] = f"lead-{int(datetime.now().timestamp() * 1000)}"
                if "dataHora" not in new_lead or not new_lead["dataHora"]:
                    new_lead["dataHora"] = datetime.now().strftime("%d/%m/%Y às %H:%M")
                if "status" not in new_lead:
                    new_lead["status"] = "novo"

                # Inserir no topo da lista (mais recentes primeiro)
                leads.insert(0, new_lead)
                save_leads(leads)

                self.send_response(201)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(json.dumps({"success": True, "lead": new_lead}, ensure_ascii=False).encode("utf-8"))
            except Exception as e:
                self.send_response(400)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))
            return

        # Atualizar status de um lead
        if parsed.path == "/api/leads/status":
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length).decode("utf-8")
            try:
                data = json.loads(body)
                lead_id = data.get("id")
                new_status = data.get("status")

                leads = get_leads()
                for lead in leads:
                    if lead.get("id") == lead_id:
                        lead["status"] = new_status
                        break
                save_leads(leads)

                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"success": True}).encode("utf-8"))
            except Exception as e:
                self.send_response(400)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))
            return

        # Excluir lead
        if parsed.path == "/api/leads/delete":
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length).decode("utf-8")
            try:
                data = json.loads(body)
                lead_id = data.get("id")
                leads = get_leads()
                leads = [l for l in leads if l.get("id") != lead_id]
                save_leads(leads)

                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"success": True}).encode("utf-8"))
            except Exception as e:
                self.send_response(400)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))
            return

        self.send_response(404)
        self.end_headers()

def run():
    server_address = ("", PORT)
    httpd = HTTPServer(server_address, CustomHandler)
    print(f"Servidor Alcântara & Diamantino Advocacia ativo em http://localhost:{PORT}")
    print(f"Painel Administrativo: http://localhost:{PORT}/admin.html")
    httpd.serve_forever()

if __name__ == "__main__":
    run()
