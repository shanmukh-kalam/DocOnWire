# DocOnWire
# 🩺 Online Doctor Consultation System with IoT Health Monitoring

A **web-based telemedicine platform** built using **Python Django**, **PostgreSQL**, **TailwindCSS**, and **jQuery**, that connects patients and doctors for seamless virtual consultations.  
Integrated with **ESP32 + MAX30102 sensor** for real-time health monitoring (SpO₂ and Heart Rate), this project bridges the gap between healthcare and IoT.

---

## 🚀 Project Overview

The **Online Doctor Consultation System** allows patients to consult doctors remotely via secure video chat, while maintaining digital health records, consultation history, and revenue analytics for doctors.  
The integrated **IoT module (ESP32 + MAX30102)** transmits live vital readings directly to the Django backend through REST APIs, enabling doctors to monitor patients’ basic health parameters.

---

## 🧩 Features

### 👨‍⚕️ Doctor Module
- Secure login and profile creation (specialization, fees, availability).
- Manage patient appointments and video consultations.
- Generate and upload e-prescriptions.
- Track earnings via revenue dashboard.

### 👤 Patient Module
- Register, log in, and manage profiles.
- Search and filter doctors by specialization or availability.
- Book, cancel, or reschedule consultations.
- View consultation history and download prescriptions.

### 📹 Consultation Module
- In-app video consultations using WebRTC / Django Channels.
- Secure and encrypted doctor–patient communication.
- Optional session recording with patient consent.

### ⚙️ Admin Module (optional)
- Manage users, consultations, and reports.
- Monitor activity and handle disputes.

### 🧠 IoT Health Monitoring Module
- ESP32 + MAX30102 sensor for **SpO₂ and Heart Rate** measurement.
- Sends data to Django backend via HTTP POST (REST API).
- Display vitals on doctor dashboard for analysis.
- Supports manual trigger (touch sensor / serial command) for data upload.

---

  
