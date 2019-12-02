CREATE PROCEDURE SelectBooking
	@bookingId int
AS
BEGIN
	SELECT Bookings.arrivalDate, Bookings.departureDate, Bookings.countPersons,
Bookings.roomId, Clients.name, Clients.surname 
	FROM Bookings
	LEFT JOIN Clients ON Bookings.clientId = Clients.clientId
	WHERE Bookings.bookingId = @bookingId
END
GO
