USE [BowserHotel]
GO

/****** Object:  View [dbo].[FullPriceOfBookingClients]    Script Date: 9/25/2019 1:52:23 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


ALTER VIEW [dbo].[FullPriceOfBookingClients]
AS

SELECT  dbo.Clients.clientId,dbo.Clients.name+' '+dbo.Clients.surname as fullname, dbo.Bookings.arrivalDate, dbo.Bookings.departureDate, Bookings.bookingId, Bookings.countPersons,
	 SUM((1-IIF(dbo.Payments.discount IS NULL,0,dbo.Payments.discount))*dbo.Payments.price) as priceServices,
		 Rooms.price*Bookings.countPersons as priceRoom,
	(SUM((1-IIF(dbo.Payments.discount IS NULL,0,dbo.Payments.discount))*dbo.Payments.price)+ Rooms.price*Bookings.countPersons ) as totalPrice
FROM  dbo.Clients INNER JOIN
	dbo.Bookings ON dbo.Clients.clientId = dbo.Bookings.clientId INNER JOIN
	dbo.Payments ON dbo.Bookings.bookingId = dbo.Payments.bookingId INNER JOIN 
	Rooms ON Bookings.roomId = Rooms.roomId
		GROUP BY   Bookings.bookingId, dbo.Bookings.arrivalDate, dbo.Bookings.departureDate, Rooms.price,Bookings.countPersons,  dbo.Clients.clientId,dbo.Clients.name,dbo.Clients.surname


GO


