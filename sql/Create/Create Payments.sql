USE [BowserHotel]
GO

CREATE TABLE Payments(
    [paymentId] [int] NOT NULL PRIMARY KEY IDENTITY,
	[bookingId] [int] NOT NULL,
	[serviceId] [int] NOT NULL,
	[datePay] [date] NOT NULL,
	[startTime] [time](0) NOT NULL,
	[endTime] [time](0) NOT NULL,
	[discount] [float] NULL CHECK(discount >0 AND discount <1),
	[price] money NOT NULL CHECK(price >0.0),
	[bookingDate] [datetime] NOT NULL,
	[status] [nchar](10) NOT NULL,
	CONSTRAINT FK_Payments_To_Bookings FOREIGN KEY (bookingId)  REFERENCES Bookings (bookingId),
	CONSTRAINT FK_Payments_To_Services FOREIGN KEY (serviceId)  REFERENCES Services (serviceId),
	CONSTRAINT UQ_Payments UNIQUE(bookingId, serviceId,datePay, startTime),
	CONSTRAINT CHK_Payments  CHECK(endTime > startTime)
)


