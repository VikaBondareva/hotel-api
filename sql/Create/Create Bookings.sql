USE [BowserHotel]
GO 
CREATE TABLE [dbo].[Bookings] (
	[bookingId] [int] NOT NULL PRIMARY KEY IDENTITY,
	[clientId] [int] NOT NULL,
	[arrivalDate] [date] NOT NULL,
	[departureDate] [date] NOT NULL,
	[countPersons] [int] NOT NULL CHECK(countPersons > 0),
	[roomId] [int] NOT NULL,
	[status] [nvarchar](10) NOT NULL  CHECK(status = 'pending' OR status = 'paid' OR status = 'affected' OR status = 'canceled') DEFAULT 'pending',
	[bookingTime] [datetime] NOT NULL,
	UNIQUE (clientId, arrivalDate, departureDate,roomId ),
	CONSTRAINT FK_Bookings_Rooms FOREIGN KEY (roomId)  REFERENCES [dbo].[Rooms] (roomId),
	CONSTRAINT FK_Bookings_Clients FOREIGN KEY (clientId)  REFERENCES  [dbo].[Clients] (clientId)
) 


