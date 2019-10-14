USE [BowserHotel]
GO 
INSERT INTO Bookings (
 [bookingId],
	   [clientId]
      ,[arrivalDate]
      ,[departureDate]
      ,[countPersons]
      ,[roomId]
      ,[status]
      ,[bookingTime])
VALUES
     (1,1, '2018-10-12', '2018-10-20', 2, 101, 'paid', '2018-09-30T13:50:44')
   