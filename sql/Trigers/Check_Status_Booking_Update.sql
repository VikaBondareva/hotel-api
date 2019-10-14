USE BowserHotel
GO 

CREATE TRIGGER Chekc_Status_Booking_Update
ON Bookings FOR UPDATE
AS 
DECLARE @status nvarchar(10);
SET @status = (SELECT Bookings.status FROM Bookings, inserted
				 WHERE Bookings.bookingId = inserted.bookingId)
IF @status = 'canceled' OR @status = 'paid' ROLLBACK TRANSACTION;


