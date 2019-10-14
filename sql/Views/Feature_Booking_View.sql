use BowserHotel
go

create view Feature_Bookigns_View as
select  bookingId, Clients.clientId, name+' '+surname as fullname, arrivalDate, countPersons
from Bookings inner join Clients on Bookings.clientId = Clients.clientId
where Bookings.arrivalDate >= getdate();