DROP TABLE IF EXISTS basics.products_basic;

CREATE TABLE basics.products_basic (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2),
    stock INTEGER DEFAULT 0,
    total_views BIGINT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE
);

-- Insert data
INSERT INTO basics.products_basic (name, description, price, stock, total_views, is_active)
VALUES
('Product A', 'Description for Product A', 19.99, 100, 0, TRUE),
('Product B', 'Description for Product B', 29.99, 50, 0, TRUE),
('Product C', 'Description for Product C', 9.99, 200, 0, TRUE),
('Product D', 'Description for Product D', 49.99, 30, 0, FALSE),
('Product E', 'Description for Product E', 15.99, 150, 0, TRUE);

-- View all products
SELECT * FROM basics.products_basic;

-- View only active products
SELECT id, name, price, is_active
FROM basics.products_basic
WHERE is_active;