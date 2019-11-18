CREATE PROCEDURE InsertRoom
	@floor int,
	@countRooms int, 
	@doubleBeds int,
	@singleBeds int,
	@toilets int,
	@price money,
	@status nvarchar(10) = 'work'
AS
BEGIN
	DECLARE @totalBeds int;
	SET @totalBeds =  SUM(@doubleBeds+@singleBeds)

	INSERT INTO Rooms(floor, countRooms, countDoubleBeds,countSingleBeds, totalBeds, toilets, price, status)
		VALUES (@floor, @countRooms, @doubleBeds, @singleBeds,@totalBeds, @toilets, @price, @status)
END
GO
