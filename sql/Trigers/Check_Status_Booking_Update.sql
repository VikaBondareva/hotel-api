Create TRIGGER [dbo].[Chekc_Status_Booking_Update]
ON [dbo].[Bookings] FOR UPDATE
AS 
DECLARE @status nvarchar(10);
SET @status = (SELECT Bookings.status
FROM Bookings, inserted
WHERE Bookings.bookingId = inserted.bookingId)
IF @status = 'canceled' OR @status = 'paid'
begin
	PRINT 'Wrong status of booking update';
	ROLLBACK TRANSACTION;
end


