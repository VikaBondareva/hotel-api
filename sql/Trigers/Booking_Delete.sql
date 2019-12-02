USE BowserHotel
GO
 
CREATE TRIGGER Booking_Delete
ON Bookings
INSTEAD OF DELETE
AS

declare @id int,@arrDate date;
set @id = (SELECT bookingId FROM deleted)
set @arrDate = (SELECT arrivalDate FROM deleted)

if getdate() < @arrDate 
	UPDATE Bookings
	SET status = 'canceled'
	WHERE bookingId = @id