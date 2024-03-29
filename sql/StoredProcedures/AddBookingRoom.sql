USE [BowserHotel]
GO
CREATE PROCEDURE InsertBookingRoom
	@clientId int,
	@arrivalDate date,
	@departureDate date,
	@countPersons int,
	@roomId int
AS
BEGIN
	DECLARE @startDate date, @endDate date, @bookingTime datetime;
	SET @startDate = CONVERT(date, @arrivalDate, 10);
	SET @endDate = CONVERT(date, @departureDate, 10);
	SET @bookingTime = CONVERT(datetime, GETDATE());

	BEGIN TRY
	   INSERT INTO Bookings(clientId, arrivalDate, departureDate, countPersons, roomId, status, bookingTime)
			VALUES (@clientId, @startDate,@arrivalDate, @countPersons, @roomId, 'pending', @bookingTime)
	   PRINT 'Данные успешно добавлены!'
	   RETURN 1;
	END TRY
	BEGIN CATCH
		PRINT 'Error ' + CONVERT(VARCHAR, ERROR_NUMBER()) + ':' + ERROR_MESSAGE()
	END CATCH
END
