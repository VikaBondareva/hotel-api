use BowserHotel
go

create view Emloyees_Permisions_View as
select employeeId, name+' '+surname as fulname, positionName,  permisions
from Employees inner join Positions on Employees.positionId = Positions.positionId