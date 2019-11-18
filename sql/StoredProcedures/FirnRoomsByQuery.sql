
CREATE PROCEDURE SelectRoomsByQuery
	@minPrice float = 0, @maxPrice float = 2000,
	@minRooms int = 1, @maxRooms int = 10,
	@minBeds int = 1, @maxBeds int = 20,
	@limit int = 1, @page int = 10,
	@orderByPrice int, @orderByBeds int,
	@status nvarchar(10)
AS
BEGIN
	SELECT * FROM Rooms
	WHERE  
		Rooms.status LIKE IIF(@status IS NULL,'%', @status )
		AND Rooms.price BETWEEN @minPrice AND @maxPrice
		AND Rooms.countRooms BETWEEN @minRooms AND @maxRooms
		AND Rooms.totalBeds BETWEEN @minBeds AND @maxBeds

    ORDER BY 
		case 
		   When @orderByPrice = 1  Then Rooms.price 
		end ASC,
		case
		   When @orderByPrice = -1 Then Rooms.price 
		end DESC,
		case 
		   When @orderByBeds = 1  Then Rooms.totalBeds 
		end ASC,
		case
		   When @orderByBeds = -1 Then Rooms.totalBeds 
		end DESC

	OFFSET (@page -1) * @limit ROWS
	FETCH NEXT @limit ROWS ONLY
END
GO
