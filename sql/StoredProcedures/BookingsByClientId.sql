USE [BowserHotel]
GO

CREATE PROCEDURE SelectBookingsByClientId
	@clientId int
AS
BEGIN
	SELECT bookingId, arrivalDate, departureDate,
		countPersons, Bookings.roomId, Bookings.status, bookingTime, price,
		price*countPersons as totalPrice
	FROM Bookings
	LEFT JOIN Rooms ON Bookings.roomId = Rooms.roomId
	WHERE clientId = @clientId
	ORDER BY arrivalDate DESC
END
