use BowserHotel;
go
create view Deleted_Service_View as
select serviceId, name, price 
from DeltedServices