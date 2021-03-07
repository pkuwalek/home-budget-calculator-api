CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name varchar(20) NOT NULL,
    email varchar(100) UNIQUE NOT NULL,
    password_hash char(60) NOT NULL
);

CREATE TABLE estates (
    estate_id SERIAL PRIMARY KEY,
    user_id integer NOT NULL,
    name varchar(100),
    type int NOT NULL,
    is_rented boolean,
    FOREIGN KEY (user_id)
        REFERENCES users (user_id)
);

CREATE TABLE estate_types (
    estate_type_id SERIAL PRIMARY KEY,
    type varchar(20)
);

CREATE TABLE expenses (
    expense_id SERIAL PRIMARY KEY,
    estate_id integer NOT NULL,
    name varchar(40),
    FOREIGN KEY (estate_id)
        REFERENCES estates (estate_id)
);

CREATE TABLE one_time_charge (
    one_time_charge_id SERIAL PRIMARY KEY,
    expense_id integer NOT NULL,
    fee numeric,
    date_of_charge date,
    FOREIGN KEY (expense_id)
        REFERENCES expenses (expense_id)
);

CREATE TABLE recurrent_charge (
    recurrent_charge_id SERIAL PRIMARY KEY,
    expense_id integer NOT NULL,
    fee numeric,
    start_date date,
    end_date date,
    FOREIGN KEY (expense_id)
        REFERENCES expenses (expense_id)
);

CREATE TABLE metered_charge (
    metered_charge_id SERIAL PRIMARY KEY,
    expense_id integer NOT NULL,
    FOREIGN KEY (expense_id)
        REFERENCES expenses (expense_id)
);

CREATE TABLE meter (
    meter_id SERIAL PRIMARY KEY,
    metered_charge_id integer NOT NULL,
    start_date date NOT NULL,
    end_date date,
    FOREIGN KEY (metered_charge_id)
        REFERENCES metered_charge (metered_charge_id)
);

CREATE TABLE measurements (
    measurements_id SERIAL PRIMARY KEY,
    date date,
    value numeric,
    meter_id integer NOT NULL,
    FOREIGN KEY (meter_id)
        REFERENCES meter (meter_id)
);

CREATE TABLE unit_fees (
    unit_fees_id SERIAL PRIMARY KEY,
    metered_charge_id integer NOT NULL,
    unit_fee numeric,
    start_date date,
    end_date date,
    FOREIGN KEY (metered_charge_id)
        REFERENCES metered_charge (metered_charge_id)
);