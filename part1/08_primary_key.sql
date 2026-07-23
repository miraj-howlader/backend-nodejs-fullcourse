DROP TABLE IF EXISTS basics.sales;


CREATE TABLE basics.sales (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);


INSERT INTO basics.sales (title, price) VALUES
('Product A', 19.99),
('Product B', 29.99),
('Product C', 39.99);

-- SELECT * FROM basics.sales;


SELECT * FROM basics.sales WHERE id = 2;