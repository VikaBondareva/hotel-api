USE BowserHotel
GO

CREATE TRIGGER Booking_InsertCheck
ON Bookings 
FOR INSERT
AS

DECLARE @arrivalDate date, @departureDate date, @roomId int, @isError int;
SET @isError = 1;
SET @arrivalDate = (SELECT arrivalDate FROM inserted );
SET @departureDate = (SELECT departureDate FROM inserted );
SET @roomId = (SELECT roomId FROM inserted );

IF EXISTS (SELECT * FROM Bookings 
			WHERE Bookings.roomId = @roomId AND
			      Bookings.arrivalDate >= @arrivalDate AND
				  Bookings.departureDate <= @departureDate)
SET @isError = 0;

IF @arrivalDate < GETDATE()+1 SET @isError = 0;

IF @isError = 0 BEGIN 
	PRINT 'Неверно введены данные'	
	ROLLBACK TRANSACTION 
END