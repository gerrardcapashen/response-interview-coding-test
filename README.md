# ComparaOnline proposed solution
Hi, this the solution for ComparaOnline Test Interview.

## Assumptions
There is a few assumptions about the solution:
- For **"Full Coverage"** Products, is specify that products will increase in price every day passed. In the code is programing like that, but the product will increase again if all days has passed. There is no specification for that, so I strictly follow the rules and no increase it again.
- For **"Super Sale"** Products, when all days has passed isn't specify the behavior after that, so I assum the product will decrease 4 times to keep the rule: **"Super Sale Products degrade in price twice as fast as normal Products"**


## To run the solution
- `npm run after-30-days`, will run and display the coverage report for 30 days.
- `npm run after-30-days-to-file`, will run and write in to a file called `result_after_30_days.txt` the coverage report for 30 days.