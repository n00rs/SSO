-- Organization table
-- Data about organization
CREATE TABLE tbl_organization (
    organization_id BIGSERIAL PRIMARY KEY,
    organization_name VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL DEFAULT '',
    phone TEXT DEFAULT '',
    address TEXT DEFAULT '',
    chr_status CHAR(1) DEFAULT 'A', -- 'A' for active, 'M' for modified, 'D' for deleted
    created_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    modified_by BIGINT,
    modified_date TIMESTAMPTZ,
    FOREIGN KEY (modified_by) REFERENCES tbl_organization (organization_id) ON DELETE CASCADE
);

-- User table
-- Data about user
CREATE TABLE tbl_users (
    user_id BIGSERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL DEFAULT '',
    first_name VARCHAR(100) NOT NULL DEFAULT ' ',
    last_name VARCHAR(100) NOT NULL DEFAULT ' ',
    phone TEXT DEFAULT '',
    address TEXT DEFAULT '',
    password CHAR(100),
    chr_status CHAR(1) DEFAULT 'A', -- 'A' for active, 'M' for modified, 'D' for deleted
    created_by BIGINT NOT NULL,
    created_date TIMESTAMPTZ NOT NULL,
    modified_by BIGINT NOT NULL,
    modified_date TIMESTAMPTZ NOT NULL,
    FOREIGN KEY (created_by) REFERENCES tbl_users (user_id),
    FOREIGN KEY (modified_by) REFERENCES tbl_users (user_id) ON DELETE CASCADE
);

-- User activation
CREATE TABLE tbl_activations (
    activation_id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    activation_code VARCHAR(100) NOT NULL,
    is_activated BOOLEAN DEFAULT FALSE,
    activation_date TIMESTAMPTZ,
    FOREIGN KEY (user_id) REFERENCES tbl_users (user_id) ON DELETE CASCADE
);

-- Email logs
CREATE TABLE tbl_email_logs (
    log_id BIGSERIAL PRIMARY KEY,
    user_id BIGINT,  -- If you want to associate email events with users
    event_type VARCHAR(50) NOT NULL,  -- Event type (e.g., 'Sent', 'Received', 'Failed')
    subject VARCHAR(255),  -- Subject of the email
    message TEXT,  -- Email message content
    timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW()  -- Timestamp of the email event
);

-- SMS logs
CREATE TABLE tbl_sms_logs (
    log_id BIGSERIAL PRIMARY KEY,
    user_id BIGINT,  -- If you want to associate sms events with users
    event_type VARCHAR(50) NOT NULL,  -- Event type (e.g., 'Sent', 'Received', 'Failed')
    message TEXT,  -- Sms message content
    timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW()  -- Timestamp of the sms event
);

