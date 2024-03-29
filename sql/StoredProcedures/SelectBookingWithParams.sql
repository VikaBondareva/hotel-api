USE [BowserHotel]
GO

CREATE PROCEDURE SelectBookingWithParams 
	@clientId int, 
	@page int = 1, @limit int = 15,
	@startDate date = '1980-01-01', @endDate date = '2100-01-01',
	@status nvarchar(10),
	@orderByDate bit
AS
BEGIN
	SELECT arrivalDate, departureDate, Bookings.countPersons,roomId,Bookings.clientId, name, surname 
FROM Bookings
	LEFT JOIN Clients ON Bookings.clientId = Clients.clientId
	WHERE 
		Bookings.status LIKE IIF(@status IS NULL,'%', @status )
		AND arrivalDate >= @startDate AND departureDate <= @endDate
	ORDER BY 
		case 
		   When @orderByDate = 1  Then arrivalDate
		end ASC,
		case
		   When @orderByDate = -1 Then arrivalDate
		end DESC
	OFFSET (@page -1) * @limit ROWS
		FETCH NEXT @limit ROWS ONLY

END
GO
