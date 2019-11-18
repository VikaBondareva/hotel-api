CREATE PROCEDURE SelectRoomsNotBookingBetweenDates
	@startDate date,
	@endTDate date
AS
BEGIN
    DECLARE @start date, @end date;
	SET @start = Convert(date,@startDate, 10);
	SET @end = Convert(date,@endTDate, 10);

	SELECT DISTINCT Rooms.roomId, Rooms.price, Rooms.totalBeds, Rooms.countRooms FROM Rooms
	FULL OUTER JOIN Bookings ON Bookings.roomId = Rooms.roomId
	WHERE (Bookings.arrivalDate >= @start AND Bookings.departureDate >= @end) OR
	(Bookings.arrivalDate IS NULL AND Bookings.departureDate IS NULL)

END
GO
