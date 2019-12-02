USE [BowserHotel]
GO

/****** Object:  Table [dbo].[Countires]    Script Date: 9/9/2019 12:34:39 PM ******/
DROP TABLE [dbo].[Countires]
GO

/****** Object:  Table [dbo].[Countires]    Script Date: 9/9/2019 12:34:39 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Countires](
	[countryId] [int]  PRIMARY KEY IDENTITY NOT NULL,
	[name] [nvarchar](30) NOT NULL,
	[phoneCode] [int] NOT NULL UNIQUE,
)



