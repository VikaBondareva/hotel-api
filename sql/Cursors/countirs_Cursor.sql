declare country_cursor cursor keyset
for
select countryId, name, phoneCode
from Countires
for update

open country_cursor
declare @id int,@name nvarchar(20), @phoneCode int;
fetch  from country_cursor into @id, @name, @phoneCode
while @@FETCH_STATUS=0
	begin
		print @name
		if @name = 'Italy'
			update Countires set phoneCode = 2 where current of country_cursor;
		fetch next from country_cursor into @id, @name, @phoneCode
	end


close country_cursor
DEALLOCATE  country_cursor
	