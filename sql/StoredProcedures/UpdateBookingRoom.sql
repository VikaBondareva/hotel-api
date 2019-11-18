CREATE PROCEDURE UpdateBookingRoom
	@boolingId int, @status nvarchar(10),
	@arrivalDate date, @departureDate date,
	@countPerson int, @roomId int
AS
BEGIN

	IF @arrivalDate < @departureDate RETURN 0;
	
	IF EXISTS (SELECT * FROM Rooms WHERE boolingId = @boolingId) 
		DECLARE @currentStatus nvarchar(10);
		SET @currentStatus = (SELECT status FROM Bookings WHERE bookingId = @boolingId);

		IF @currentStatus = 'pending' AND @status IS NULL
		BEGIN 
			UPDATE Bookings
			SET arrivalDate = @arrivalDate, departureDate = @departureDate, countPersons = @countPerson, roomId = @roomId
				WHERE bookingId = @boolingId
		END
		ELSE
		BEGIN 
			UPDATE Bookings
				SET status = @status
				WHERE bookingId = @boolingId
		END
END
GO
