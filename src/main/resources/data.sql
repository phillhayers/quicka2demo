--Bank
merge into bank(bank_id, name, logo_file) values (1, 'Barclays', 'barclays-logo.jpg');
merge into bank(bank_id, name, logo_file) values (2, 'First Direct', 'first-direct-logo.png');
merge into bank(bank_id, name, logo_file) values (3, 'Halifax', 'halifax-logo.png');
merge into bank(bank_id, name, logo_file) values (4, 'HSBC', 'hsbc-logo.png');
merge into bank(bank_id, name, logo_file) values (5, 'Lloyds', 'lloyds-logo.png');
merge into bank(bank_id, name, logo_file) values (6, 'NatWest', 'nat-west-logo.png');
merge into bank(bank_id, name, logo_file) values (7, 'RBS', 'rbs-logo.png');

--Account
merge into account(account_id, bank_id, account_name, active) values (2, 1, 'First Account', 1);
merge into account(account_id, bank_id, account_name, active) values (1, 2, 'Current Account', 1);
