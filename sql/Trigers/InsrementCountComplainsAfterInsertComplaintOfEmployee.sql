use BowserHotel
go

create TRIGGER InsertComplaintOfEmployeeForClient
   ON ComplaintsEmployees
   after insert
AS 
BEGIN
	declare @id int, @count int;
	set @id = (select complaintId from inserted)
	set @count = (select count(*) from ComplaintsEmployees where complaintId = @id)

	update Complaints
	set countComplaints = @count
	where complaintId = @id
END
GO
