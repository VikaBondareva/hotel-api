USE [BowserHotel]
GO

create VIEW [dbo].[RoomPriceInBookingView]
AS
SELECT        Clients.clientId,Clients.name, Clients.surname,Bookings.bookingId, Rooms.price,
			 (Rooms.price+ SUM(Additions.price)) as totalPrice
FROM            dbo.Clients INNER JOIN
                         dbo.Bookings ON dbo.Clients.clientId = dbo.Bookings.clientId INNER JOIN
                         dbo.Rooms ON dbo.Bookings.roomId = dbo.Rooms.roomId CROSS JOIN
                         dbo.Additions
			  GROUP BY dbo.Clients.clientId, dbo.Clients.name, dbo.Clients.surname,dbo.Bookings.bookingId, dbo.Rooms.price
GO


