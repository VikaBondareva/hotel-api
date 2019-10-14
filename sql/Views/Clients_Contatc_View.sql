use BowserHotel
go 

create view Contacts_Clients_View as
select Clients.name+' '+Clients.surname as fullname,  '+'+phoneCode+phoneNumber as phone, email
from Clients inner join Countires on Clients.phoneCountryId = Countires.countryId