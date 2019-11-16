use BowserHotel
go 

create view Contacts_Clients_View as
select Clients.name+' '+Clients.surname as fullname,  '+'+cast(phoneCode as nvarchar(50))+cast(phoneNumber as nvarchar(50)) as phone, email
from Clients inner join Countires on Clients.phoneCountryId = Countires.countryId