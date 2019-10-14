
CREATE TABLE [dbo].[Discounts](
	[discountId] [int] NOT NULL PRIMARY KEY IDENTITY,
	[type] [nchar](10) NOT NULL,
	[count] [float] NOT NULL,
)


