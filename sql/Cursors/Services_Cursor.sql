declare @services_cursor cursor 
declare @name nvarchar(20), @price money

exec SelectService @services_cursor OUTPUT
			fetch from @services_cursor into @name, @price
			Print @name + ': '+cast(@price as nvarchar(10)) +'$'

WHILE (@@FETCH_STATUS=0)
BEGIN
  FETCH NEXT FROM @services_cursor into @name, @price
  	Print @name + ': '+cast(@price as nvarchar(10))+'$'
END
CLOSE @services_cursor
DEALLOCATE @services_cursor