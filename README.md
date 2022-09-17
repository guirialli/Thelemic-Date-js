# Thelemic-Date-js
A simple command-line thelemic calendar ❤️.

### Install
you need to install npm, then on linux or mac use:
```bash
> sudo npm install -g thelemic-date
```

If you use Windows, use:
```CMD
> npm install -g thelemic-date
```
### Example
```bash
> tdate
Anno V:viii, Sol 🌞 in Virgem ♍, Dies Venus ♀, Luna 🌗 in Gemini ♊, aerae legis
```
"tdate" is short for "Thelemic date", so the command maste.

```bash
> tdate -d
Dies Venus ♀
```
"tdate -d" or "tdate --day" returns the day of the planetary week.

```bash
> tdate -m
Luna 🌗 in Gemini ♊
```
"tdate -m" or  "tdate --moon" returns moon phase and sign.


```bash
> tdate -s
Sol 🌞 in Virgem ♍
```
"tdate -s" or "tdate --sun" return sun sign.

```bash
> tdate -y
Anno V:viii
```
"tdate -y" or "tdate --year", returns the year thelemic

```bash
> tdase -n
Anno V:viii, Sol  in Virgem, Dies Venus, Luna (Last Quarter) in Gemini, aerae legis
```
"tdate -n" or  "tdate --noIcon", returns everything without emoji and can be accompanied by other arguments.
example:
```bash
> tdate -n -s
Sol in Virgem
```
