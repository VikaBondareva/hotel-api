
CREATE PROCEDURE SelectService @cur  CURSOR VARYING OUTPUT
AS
BEGIN
	SET @cur = CURSOR FORWARD_ONLY STATIC FOR
	select name, ptice
	from Services
	open @cur
END
GO
