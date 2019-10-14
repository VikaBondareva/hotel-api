use BowserHotel
go 

create view Contacts_Employees_View as
select Employees.name+' '+Employees.surname as fullname,  phoneNumber as phone, email
from Employees 