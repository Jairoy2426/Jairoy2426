<!-- ========================= HERO ========================= -->

<h1 align="center">Hercules &nbsp;·&nbsp; Cybersecurity Engineer | DevSecOps | Infrastructure</h1>

<p align="center">
  Building, securing, monitoring, and automating real-world infrastructure.
</p>

<p align="center">
  <a href="https://github.com/Jairoy2426">
    <img src="https://img.shields.io/badge/GitHub-Jairoy2426-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  </a>
</p>

---

<!-- ========================= ABOUT ========================= -->

## About

I work across cybersecurity, infrastructure, DevOps, and backend systems — with an emphasis on owning the full operational picture: from initial deployment and service hardening through to security monitoring, incident detection, and operational automation.

My practical work includes running a Wazuh-based SIEM homelab on Proxmox, writing custom detection rules mapped to MITRE ATT&CK, building CIS-benchmark Linux auditors, researching ML-based intrusion detection, and engineering automated CI/CD pipelines with hardened Nginx and Docker. I build tools that solve real operational problems — secret leakage scanners, web vulnerability scanners, infrastructure dashboards — and I operate the infrastructure they run on.

I am not pursuing generic software development. My focus is security engineering, infrastructure security, and DevSecOps — with backend skills that support tooling, automation, and internal platforms.

---

<!-- ========================= SECURITY FOCUS ========================= -->

## Security Focus

<table>
  <tr>
    <td valign="top" width="33%">

**Security Operations**
- SIEM deployment and configuration (Wazuh)
- Log collection and analysis
- Custom detection rule authoring
- MITRE ATT&amp;CK technique mapping
- Windows Event Log auditing (Sysmon, PowerShell, Defender)
- File Integrity Monitoring (FIM)
- Security Configuration Assessment (CIS benchmarks)
- Alert correlation and brute-force detection

    </td>
    <td valign="top" width="33%">

**Infrastructure Security**
- Linux server hardening
- CIS benchmark auditing across 12 OS surfaces
- SSH hardening
- Firewall and network access control
- Reverse proxy configuration and service isolation (Nginx)
- Cloudflare DNS, traffic filtering, and origin shielding
- Docker service isolation
- Secure service exposure

    </td>
    <td valign="top" width="33%">

**Security Engineering**
- Security tooling development (Python)
- Secret leakage detection (regex + entropy analysis)
- Automated CVE/vulnerability querying (NVD, OSV APIs)
- Web application security scanning (ports, headers, SSL)
- Network intrusion detection research (ML)
- Virtualization-based lab environments (Proxmox VE)
- CI/CD security integration

    </td>
  </tr>
</table>

---

<!-- ========================= TECH STACK ========================= -->

## Tech Stack

<table>
  <tr>
    <td valign="top" width="50%">

**Security**

![Wazuh](https://img.shields.io/badge/Wazuh-005571?style=flat-square&logo=wazuh&logoColor=white)
![MITRE ATT&CK](https://img.shields.io/badge/MITRE_ATT%26CK-B22222?style=flat-square)
![CIS Benchmarks](https://img.shields.io/badge/CIS_Benchmarks-004990?style=flat-square)
![Sysmon](https://img.shields.io/badge/Sysmon-0078D4?style=flat-square)

**Infrastructure**

![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white)
![Proxmox](https://img.shields.io/badge/Proxmox_VE-E57000?style=flat-square&logo=proxmox&logoColor=white)

**Cloud / Edge**

![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white)

    </td>
    <td valign="top" width="50%">

**Automation &amp; DevOps**

![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Bash](https://img.shields.io/badge/Bash-4EAA25?style=flat-square&logo=gnu-bash&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

**Backend**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)

**Databases**

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)

    </td>
  </tr>
</table>

---

<!-- ========================= SECURITY PROJECTS ========================= -->

## Security Projects

---

### [wazuh-siem-homelab](https://github.com/Jairoy2426/wazuh-siem-homelab)

**Enterprise-grade SIEM homelab built on Wazuh 4.12, running on Proxmox VE.**

Deployed a Wazuh all-in-one instance on Ubuntu Server 22.04 inside Proxmox, connected to a live Windows 11 endpoint as a monitored agent.

- **What I built:** Full SIEM stack with File Integrity Monitoring (real-time MD5/SHA1/SHA256 tracking across 11 critical system paths), Windows Registry monitoring across 7,400+ keys, Windows Event Log collection across 7 channels (PowerShell, Sysmon, Defender, Security, System, Application, Task Scheduler), and Security Configuration Assessment against CIS Windows 11 v3.0.0 benchmarks.
- **Detection engineering:** Wrote 15+ custom detection rules mapped to MITRE ATT&CK techniques including T1547.001 (Boot Autostart), T1574.001 (DLL Hijacking), T1565.001 (Data Manipulation). Rules cover brute-force correlation, LOLBin execution detection, and off-hours administrative access alerting.
- **Technologies:** Wazuh 4.12, Proxmox VE, Ubuntu Server 22.04, Windows 11, Sysmon, Windows Event Logs
- **Demonstrates:** SIEM deployment and management, detection engineering, MITRE ATT&CK mapping, Windows endpoint monitoring, homelab infrastructure operations

---

### [NULLHOUND](https://github.com/Jairoy2426/NULLHOUND)

**Terminal-only Linux security configuration auditor built against CIS benchmarks.**

Built to audit live Linux systems across 12 attack surface categories and produce actionable, structured security reports.

- **What I built:** A Python tool with a modular OOP architecture (12 modules inheriting from a shared `BaseModule`) that runs multi-threaded audits across: cron, docker, filesystem, firewall, kernel, logs, network, OS info, packages, services, SSH, and users. Integrates live CVE lookups against the NVD and OSV APIs for installed packages. Outputs interactive terminal tables (via `rich`), and exports HTML, JSON, and TXT reports.
- **Technologies:** Python (asyncio, Rich, HTTPX), NVD API, OSV API, GitHub Actions
- **Demonstrates:** Security automation, CIS benchmark knowledge, Linux hardening concepts, vulnerability management tooling, Python security tooling development

---

### [ML-IDS](https://github.com/Jairoy2426/ML-IDS)

**Machine learning pipeline for multi-class network intrusion detection.**

Research implementation of an IDS pipeline on the CICIDS2017 benchmark dataset (~2.8M samples, 79 network features, 15 attack classes including DoS, DDoS, brute force, web attacks, infiltration, and botnet traffic).

- **What I built:** End-to-end ML pipeline covering data cleaning, stratified train/test split, feature scaling, PCA dimensionality reduction (77 to 20 components), hybrid resampling (RandomUnderSampler + SMOTE for 80:1 class imbalance), training across 5 classifiers (Logistic Regression, KNN, SVM, Random Forest, XGBoost), GridSearchCV hyperparameter tuning, a Soft-Voting Ensemble, and SHAP explainability (global + per-class beeswarm plots).
- **Technologies:** Python (Scikit-Learn, XGBoost, SHAP, Imbalanced-Learn, Pandas, NumPy, Matplotlib), Jupyter Notebook
- **Demonstrates:** IDS/detection concepts, applied ML for network security, SHAP explainability in security context, research-grade implementation

---

### [KeyHound](https://github.com/Jairoy2426/KeyHound)

**Async frontend secret leakage discovery and validation pipeline.**

Built to crawl web application frontend assets and identify leaked API keys, credentials, and high-entropy secrets.

- **What I built:** A 3-stage async Python pipeline: Crawler (asynchronous JS link extraction from HTML), Detector (60+ YAML-configured regex signatures combined with Shannon entropy scoring), Verifier (live, safe validation requests against target APIs — Slack, GitHub, AWS — to reduce false positives). Outputs results as JSON, HTML, or terminal table views. Includes a Pytest test suite for the detection module.
- **Technologies:** Python (asyncio, HTTPX, Typer CLI, Rich, PyYAML, BeautifulSoup4, Pytest)
- **Demonstrates:** Offensive security tooling, secret detection, entropy-based analysis, async Python engineering, security testing methodology

---

### [HashCracker](https://github.com/Jairoy2426/HashCracker)

**Web-based target reconnaissance and vulnerability scanner.**

FastAPI backend with a dashboard frontend for scanning web targets across multiple security dimensions.

- **What I built:** Asynchronous port scanner (17 common ports), web application fingerprinting (technology/framework detection), security header analysis (CSP, HSTS, X-Frame-Options, and similar), SSL/TLS certificate verification, and an orchestrated full-scan endpoint combining all checks. FastAPI REST API backend with a responsive frontend dashboard.
- **Technologies:** Python (FastAPI, HTTPX, BeautifulSoup4, Socket, SSL), HTML, Tailwind CSS
- **Demonstrates:** Reconnaissance tooling, web application security analysis, security header auditing, async API design

---

## DevOps &amp; Infrastructure Projects

---

### [ci-cd-pipeline](https://github.com/Jairoy2426/ci-cd-pipeline)

**Production-ready automated CI/CD pipeline with security-hardened deployment.**

End-to-end GitHub Actions pipeline covering code quality, testing, containerization, and SSH-based remote deployment.

- **What I built:** GitHub Actions workflow automating: ESLint (Airbnb-base) linting, Jest + Supertest unit testing, multi-stage Docker image build, Docker Hub push, SSH-based remote deployment via shell script, and live health-check verification post-deploy. Nginx reverse proxy configured with rate limiting, load balancing, and security headers. Docker Compose configuration for development and production environments.
- **Technologies:** GitHub Actions, Node.js, Express.js, Docker, Docker Compose, Nginx, Jest, Supertest, Bash
- **Demonstrates:** DevSecOps pipeline design, CI/CD automation, hardened Nginx configuration, container security, SSH-based deployment

---

### [homelab-command-center](https://github.com/Jairoy2426/homelab-command-center)

**Self-hosted infrastructure monitoring dashboard and personal command center.**

Full-stack Next.js 15 application serving as a centralized operational view of homelab infrastructure.

- **What I built:** Dark-mode dashboard with real-time system telemetry (remote agent cron jobs POST JSON payloads to the dashboard API), task management, service health tracking, GitHub activity widget, Google Calendar integration, and a settings panel. Route protection via Auth.js v5 (NextAuth). PostgreSQL backend with Prisma ORM. Fully containerized with Docker Compose.
- **Technologies:** Next.js 15 (React 19, TypeScript, App Router), Prisma ORM, PostgreSQL, Auth.js v5, Docker, Docker Compose
- **Demonstrates:** Self-hosted infrastructure, telemetry collection, authenticated dashboards, full-stack TypeScript, homelab operations

---

<!-- ========================= BACKEND CONTEXT ========================= -->

## Backend Development in a Security Context

I build backend services and APIs primarily when they serve security tooling, infrastructure automation, monitoring dashboards, or internal operational platforms.

Examples from my work:
- FastAPI backend powering a web vulnerability scanner (port scanning, header analysis, SSL inspection)
- Next.js API routes serving a self-hosted infrastructure telemetry platform
- REST APIs supporting monitoring, moderation, and admin tooling
- Async Python pipelines for security scanning and validation workflows

**Languages and frameworks:** Python, TypeScript, Node.js, FastAPI, Express.js, Next.js

---

<!-- ========================= CURRENT DIRECTION ========================= -->

## What I Am Currently Building

- **SIEM/Detection engineering** — Expanding Wazuh detection coverage, testing additional MITRE ATT&CK scenarios
- **Security automation** — Building Python-based tooling for configuration auditing and vulnerability detection
- **ML-based IDS research** — Investigating network intrusion detection using classical ML and ensemble methods with SHAP interpretability
- **Linux hardening** — Applying CIS benchmarks to systems, refining audit tooling
- **DevSecOps pipelines** — Integrating security checks into CI/CD workflows

---

<!-- ========================= PROJECT DIRECTORY ========================= -->

## Project Directory

| Repository | Category | Core Technologies | What it demonstrates |
|---|---|---|---|
| [wazuh-siem-homelab](https://github.com/Jairoy2426/wazuh-siem-homelab) | Security Operations | Wazuh, Proxmox, Ubuntu, Windows, Sysmon | SIEM deployment, detection engineering, MITRE ATT&CK mapping |
| [NULLHOUND](https://github.com/Jairoy2426/NULLHOUND) | Security Engineering | Python, NVD/OSV APIs, Rich | CIS benchmark auditing, security automation, Linux hardening |
| [ML-IDS](https://github.com/Jairoy2426/ML-IDS) | Security Research | Python, Scikit-Learn, XGBoost, SHAP | ML-based IDS, network traffic analysis, model explainability |
| [KeyHound](https://github.com/Jairoy2426/KeyHound) | Security Tooling | Python, asyncio, HTTPX | Secret leakage detection, entropy analysis, security scanning |
| [HashCracker](https://github.com/Jairoy2426/HashCracker) | Security Tooling | Python, FastAPI, Socket/SSL | Reconnaissance tooling, web security analysis, port scanning |
| [ci-cd-pipeline](https://github.com/Jairoy2426/ci-cd-pipeline) | DevSecOps | GitHub Actions, Docker, Nginx, Bash | CI/CD automation, hardened deployment, container security |
| [homelab-command-center](https://github.com/Jairoy2426/homelab-command-center) | Infrastructure | Next.js 15, Prisma, PostgreSQL, Docker | Self-hosted infrastructure, telemetry, authenticated dashboards |
| [ctf-writeups](https://github.com/Jairoy2426/ctf-writeups) | Security Practice | Markdown | CTF methodology, practical security problem-solving |

---

<!-- ========================= CONTACT ========================= -->

## Contact

<p>
  <a href="https://github.com/Jairoy2426"><img src="https://img.shields.io/badge/GitHub-Jairoy2426-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/></a>
</p>

Open to roles in: **Cybersecurity Analysis · Security Engineering · SOC Operations · DevSecOps · Infrastructure Security · Security Automation**

> All projects listed here are personal/homelab work built for learning and experimentation.
