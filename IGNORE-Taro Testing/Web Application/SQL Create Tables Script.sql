-- Drop statements for all tables
DROP TABLE IF EXISTS gdsc_events;
DROP TABLE IF EXISTS fund_transfers;
DROP TABLE IF EXISTS revenue_statements;
DROP TABLE IF EXISTS expense_statements;
DROP TABLE IF EXISTS activity_incomes;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS staffs;
DROP TABLE IF EXISTS form_lists;
DROP TABLE IF EXISTS transaction_details;
DROP TABLE IF EXISTS transaction_dates;
DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS transaction_lists;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS item_lists;
DROP TABLE IF EXISTS payments;


-- Create statements for all tables
CREATE TABLE IF NOT EXISTS payments
(
    payment_id VARCHAR(25),
    payment_date DATE,
    payment_detail VARCHAR(25),
    PRIMARY KEY (payment_id)
);

CREATE TABLE IF NOT EXISTS item_lists
(
    item_list_id VARCHAR(25),
    item_list_type ENUM('revenue','expense'),
    item_list_name VARCHAR(55),
    PRIMARY KEY (item_list_id)
);

CREATE TABLE IF NOT EXISTS items
(
    item_id VARCHAR(25),
    item_name VARCHAR(55),
    item_price VARCHAR(55),
    item_amount INT,
    item_note VARCHAR(25),
    item_list_id VARCHAR(25),
    payment_id VARCHAR(25),
    PRIMARY KEY (item_id),
    FOREIGN KEY (item_list_id) REFERENCES item_lists(item_list_id),
    FOREIGN KEY (payment_id) REFERENCES payments(payment_id)
);

CREATE TABLE IF NOT EXISTS transaction_lists
(
    transaction_list_id VARCHAR(25),
	transaction_list_type ENUM("transaction","date"),
	transaction_list_name VARCHAR(55),
    PRIMARY KEY (transaction_list_id)
);

CREATE TABLE IF NOT EXISTS transactions
(
    transaction_id VARCHAR(25),
    item_id INT,
    contact_no INT,
    transaction_list_id VARCHAR(25),
    FOREIGN KEY (transaction_list_id) REFERENCES transaction_lists(transaction_list_id),
    PRIMARY KEY (transaction_id)
);

CREATE TABLE IF NOT EXISTS transaction_dates
(
    transaction_date_id VARCHAR(25),
    transaction_note VARCHAR(105),
    transaction_list_id VARCHAR(25),
    FOREIGN KEY (transaction_list_id) REFERENCES transaction_lists(transaction_list_id),
    PRIMARY KEY (transaction_date_id)
);

CREATE TABLE IF NOT EXISTS transaction_details
(
    td_id VARCHAR(25),
    transaction_amount INT,
    transaction_from_list_id VARCHAR(25),
    transaction_to_list_id VARCHAR(25),
    transaction_date_list_id VARCHAR(25),
    FOREIGN KEY (transaction_from_list_id) REFERENCES transaction_lists(transaction_list_id),
    FOREIGN KEY (transaction_to_list_id) REFERENCES transaction_lists(transaction_list_id),
    FOREIGN KEY (transaction_date_list_id) REFERENCES transaction_lists(transaction_list_id),
    PRIMARY KEY (td_id)
);

CREATE TABLE IF NOT EXISTS staff_lists
(
    staff_list_id VARCHAR(25),
    PRIMARY KEY (staff_list_id)
);

CREATE TABLE IF NOT EXISTS staffs
(
    staff_id VARCHAR(25),
    staff_name VARCHAR(55),
    staff_position VARCHAR(55),
    staff_list_id VARCHAR(25),
    FOREIGN KEY (staff_list_id) REFERENCES staff_lists(staff_list_id),
    PRIMARY KEY (staff_id)
);

CREATE TABLE IF NOT EXISTS users
(
    user_id VARCHAR(25),
    user_name VARCHAR(55),
    user_password VARCHAR(55),
    staff_id VARCHAR(25),
    FOREIGN KEY (staff_id) REFERENCES staffs(staff_id),
    PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS form_lists
(
    form_list_id VARCHAR(25),
    form_list_type ENUM('FT','RS','ES','AI'),
    form_list_name VARCHAR(55),
    PRIMARY KEY (form_list_id)
);

CREATE TABLE IF NOT EXISTS activity_incomes
(
    ai_id VARCHAR(25),
    ai_name VARCHAR(55),
    ai_date DATE,
    revenue_list_id VARCHAR(25),
    expense_list_id VARCHAR(25),
    prepared_staff_id VARCHAR(25),
    certified_staff_id VARCHAR(25),
    noted_staff_id VARCHAR(25),
    FOREIGN KEY (revenue_list_id) REFERENCES item_lists(item_list_id),
    FOREIGN KEY (expense_list_id) REFERENCES item_lists(item_list_id),
    FOREIGN KEY (prepared_staff_id) REFERENCES staffs(staff_id),
    FOREIGN KEY (certified_staff_id) REFERENCES staffs(staff_id),
    FOREIGN KEY (noted_staff_id) REFERENCES staff_lists(staff_list_id),
    PRIMARY KEY (ai_id)
);

CREATE TABLE IF NOT EXISTS expense_statements
(
    es_id VARCHAR(25),
    es_name VARCHAR(55),
    es_date DATE,
    expense_list_id VARCHAR(25),
    receipt_link VARCHAR(55),
    td_id VARCHAR(25),
    es_notes VARCHAR(105),
    prepared_staff_id VARCHAR(25),
    certified_staff_id VARCHAR(25),
    noted_staff_id VARCHAR(25),
    FOREIGN KEY (expense_list_id) REFERENCES item_lists(item_list_id),
    FOREIGN KEY (td_id) REFERENCES transaction_details(td_id),
    FOREIGN KEY (prepared_staff_id) REFERENCES staffs(staff_id),
    FOREIGN KEY (certified_staff_id) REFERENCES staffs(staff_id),
    FOREIGN KEY (noted_staff_id) REFERENCES staff_lists(staff_list_id),
    PRIMARY KEY (es_id)
);

CREATE TABLE IF NOT EXISTS revenue_statements
(
    rs_id VARCHAR(25),
    rs_name VARCHAR(55),
    rs_date DATE,
    revenue_list_id VARCHAR(25),
    receipt_link VARCHAR(55),
    td_id VARCHAR(25),
    rs_notes VARCHAR(105),
    prepared_staff_id VARCHAR(25),
    certified_staff_id VARCHAR(25),
    noted_staff_id VARCHAR(25),
    FOREIGN KEY (revenue_list_id) REFERENCES item_lists(item_list_id),
    FOREIGN KEY (td_id) REFERENCES transaction_details(td_id),
    FOREIGN KEY (prepared_staff_id) REFERENCES staffs(staff_id),
    FOREIGN KEY (certified_staff_id) REFERENCES staffs(staff_id),
    FOREIGN KEY (noted_staff_id) REFERENCES staff_lists(staff_list_id),
    PRIMARY KEY (rs_id)
);

CREATE TABLE IF NOT EXISTS fund_transfers
(
    ft_id VARCHAR(25),
    ft_name VARCHAR(55),
    ft_date DATE,
    ft_reason VARCHAR(105),
    receipt_link VARCHAR(55),
    td_id VARCHAR(25),
    prepared_staff_id VARCHAR(25),
    certified_staff_id VARCHAR(25),
    noted_staff_id VARCHAR(25),
    FOREIGN KEY (td_id) REFERENCES transaction_details(td_id),
    FOREIGN KEY (prepared_staff_id) REFERENCES staffs(staff_id),
    FOREIGN KEY (certified_staff_id) REFERENCES staffs(staff_id),
    FOREIGN KEY (noted_staff_id) REFERENCES staff_lists(staff_list_id),
    PRIMARY KEY (ft_id)
);

CREATE TABLE IF NOT EXISTS gdsc_events
(
    event_id VARCHAR(25),
    event_name VARCHAR(55),
    ft_form_list_id VARCHAR(25),
    rs_form_list_id VARCHAR(25),
    es_form_list_id VARCHAR(25),
    ai_form_list_id VARCHAR(25),
    FOREIGN KEY (ft_form_list_id) REFERENCES form_lists(form_list_id),
    FOREIGN KEY (rs_form_list_id) REFERENCES form_lists(form_list_id),
    FOREIGN KEY (es_form_list_id) REFERENCES form_lists(form_list_id),
    FOREIGN KEY (ai_form_list_id) REFERENCES form_lists(form_list_id),
    PRIMARY KEY (event_id)
);
