CREATE PROCEDURE PaginateRooms
	@limit int,
	@page int
AS
BEGIN
	SELECT  * from Rooms
	WHERE Rooms.status = 'work'
	ORDER BY price, roomId
	   OFFSET (@page -1) * @limit ROWS
	   FETCH NEXT @limit ROWS ONLY
		
END
GO
