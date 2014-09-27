FieldtypeTime & InputfieldTime
==============================

Modules for ProcessWire that allow easy input of times in various formats. The value is stored in the DB as an SQL time
field with values between about +800:00:00 and -800:00:00 but the display and input format can be chosen by the user.


Supported Input/Display formats
-------------------------------

The following input and display formats are supported.

- 'HH24' Hours (0-24)
- 'HH24MM' Hours (0-24) & minutes (00-59)
- 'HH24MMSS' Hours (0-24), minutes (00-59) & seconds (00-59)
- 'HHH' Hours (Integer 0-800)
- 'HHHMM' Hours (0-800) & minutes (00-59)
- 'HHHMMSS' Hours (0-800), minutes (00-59) & seconds (00-59)
- 'MMM' Minutes (Integer)
- 'SSS' Seconds (Integer)
- 'MMSS' Minutes (00-59) & seconds (00-59).

The fieldtype will use the chosen format to work out if actual input is incomplete and try to autocomplete the missing
parts. For example, if you have a field setup to HH24MM and only type '9' into the Inputfield the fieldtype will assume
you mean '09:00' (that is, 9 in the morning) and use that as the final value.

You can configure if colons are to be used between parts in the displayed output. So you can choose between '0900' and
'09:00'.


Comparison in selectors
-----------------------

If you wish to use a formatted time in a selector then you need to have the time in your selector string use the DB
formatting of 'HH:MM:SS' as the comparison is done by the DB. You can use the `date()` function directly or you can use
the utility function `formattedStringToTime()`...

    // For a value with Hours and Mins...
    $selector_time_string = date('H:m:00', $time); // or...
    $selector_time_string = FieldtypeTime::formattedStringToTime(date('H:m', $time), 'HH24MM');

It will often be easier to work with `date()` directly.
