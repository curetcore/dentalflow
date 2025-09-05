-- DentalFlow AI Database Schema

-- Clínicas
CREATE TABLE clinics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  whatsapp VARCHAR(20),
  email VARCHAR(255),
  address TEXT,
  plan VARCHAR(50) DEFAULT 'starter',
  maria_ai_enabled BOOLEAN DEFAULT true,
  onboarded_at TIMESTAMP,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Configuración María AI
CREATE TABLE maria_ai_config (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  clinic_id UUID REFERENCES clinics(id),
  personality VARCHAR(50) DEFAULT 'friendly',
  response_style TEXT,
  custom_instructions TEXT,
  auto_confirm BOOLEAN DEFAULT true,
  predictive_analytics BOOLEAN DEFAULT true
);

-- Pacientes
CREATE TABLE patients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  clinic_id UUID REFERENCES clinics(id),
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  whatsapp VARCHAR(20),
  email VARCHAR(255),
  birth_date DATE,
  ai_profile JSONB,
  risk_score INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Citas
CREATE TABLE appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  clinic_id UUID REFERENCES clinics(id),
  patient_id UUID REFERENCES patients(id),
  datetime TIMESTAMP NOT NULL,
  service VARCHAR(255),
  duration INTEGER DEFAULT 30,
  status VARCHAR(50) DEFAULT 'scheduled',
  ai_confirmed BOOLEAN DEFAULT false,
  no_show_probability DECIMAL(3,2),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Conversaciones María AI
CREATE TABLE ai_conversations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  clinic_id UUID REFERENCES clinics(id),
  patient_id UUID REFERENCES patients(id),
  channel VARCHAR(20),
  message_type VARCHAR(50),
  ai_message TEXT,
  patient_response TEXT,
  sentiment_score DECIMAL(3,2),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Métricas
CREATE TABLE metrics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  clinic_id UUID REFERENCES clinics(id),
  date DATE,
  appointments_total INT,
  no_shows INT,
  confirmations INT,
  ai_interactions INT,
  created_at TIMESTAMP DEFAULT NOW()
);
