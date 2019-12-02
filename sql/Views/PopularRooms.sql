USE [BowserHotel]
GO

create VIEW [dbo].[PopularRooms]
AS
SELECT        dbo.Rooms.roomId, dbo.Rooms.price,
			 COUNT(dbo.Bookings.bookingId) as bookingCount
FROM            dbo.Bookings INNER JOIN
                         dbo.Rooms ON dbo.Bookings.roomId = dbo.Rooms.roomId
			GROUP BY   dbo.Rooms.roomId, dbo.Rooms.price
			HAVING  COUNT(dbo.Bookings.bookingId) > 5
GO


