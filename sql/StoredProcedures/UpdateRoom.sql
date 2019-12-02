
CREATE PROCEDURE UpdateRoom
    @roomId int,
	@floor int,
	@countRooms int, 
	@doubleBeds int,
	@singleBeds int,
	@toilets int,
	@price float,
	@status nvarchar(20) = 'work'
AS
BEGIN
	IF NOT EXISTS (SELECT * FROM Rooms WHERE roomId = @roomId) RETURN 0;

	DECLARE @totalBeds int;
	SET @totalBeds =  SUM(@doubleBeds+@singleBeds)

	UPDATE Rooms
	  SET floor = @floor, countRooms = @countRooms,countDoubleBeds = @doubleBeds,
			countSingleBeds =@singleBeds, totalBeds = @totalBeds, toilets = @toilets, price =@price,
			status = @status
	   WHERE roomId = @roomId
END
GO
