
Last Edit: 10/18/2020
Author: Rikesh Thapa

## Directory Structure
- data/data.json
- dashboard: 
    - stores all dashboard code (primarily the container that brings in all reliant components)


## Project Requoirements


# TODO list:
- Table: Create a table with the following criteria:
    - row: ticket type (tickettype_name_short)
    - columns:
        - Act. : tickets_actual
        - Bdgt. : tickets_benchmark
        - Act. vs. Bdgt : tickets_actual - tickets_benchmark
        - Pred. : tickets_predicted = tickets_actual + tickets_forcast
        - Pred. vs Bdgt. : tickets_predicted - tickets_benchmark
    - Total Row: sum each column
- Bar Chart:
    - index (each bar): event_datetime (M/D?YY) - event_name_abbr
    - Y horizontal: 
        - Act. : tickets_actual  -- Solid Bar
        - Pred. : tickets_predicted = tickets_actual + tickets_forcast  -- faded bar
        - Bdgt. :  tickets_benchmark -- line or symbol
        - color of solid and faded bar: 
            - Green: tickets_predicted >= tickets_benchmark
            - Red: tickets_predicted < tickets_benchmark

- Filter:
    - filter Barchart by tickettype_name:
        > click on row in table to filter by tickettype_name of that row
    - Note:
        > only one row selected at time
        > Toggle row i.e. click row on and off

- zip files and send to recipient for submission


# Notes:
- Anatomy of Data: 
    {
       "event_id":2785,                         unique <internal ID for event>
       "pricelocation_id":2075,                 unique <Internal ID for price locatio>
       "tickettype_id":475,                     unique <internal ID for ticket type>
       "tickets_actual":78,                     <tickets sold Actual>
       "tickets_forecast":0,                     
       "tickets_benchmark":47.08111435,
       "event_datetime":"2020-04-10T19:10:00",  <Datetime of event>
       "event_name":"WASHINGTON NATIONALS",     <name of event>
       "event_name_short":"NATIONALS",          <name of event>
       "event_name_abbr":"WSH",                 <name of event>
       "pricelocation_name":"Y30",              <name of price location>
       "pricelocation_name_abbr":"Y30",         <name of price location>
       "tickettype_name":"GROUP",               <name of ticketype>
       "tickettype_name_short":"GROUP"          <name of ticketype>
    }

    -> Event: 
        - event_id: internal ID for event
        - event_datetime: datetime of event
        - event_name: name of event
        - event_name_short: name of event, max(20 characters)
        - event_name_abbr: name of event, max(10 characters)
    
    -> Ticket Type:
        - tickettype_id: Internal ID for tickettype
        - tickettype_name: name of ticket type
        - tickettype_name_short: name of tickettype, max(20 character)
    
    -> Price Locaiton: 
        - pricelocation_id: Internal ID for price location 
        - pricelocation_name: name of price location
        - pricelocation_name_abbr: name of price location limit 10

    Values:
    -> Actual Tickets Sold = tickets_actual
    -> Forecasted Tickets Sold = tickets_forcast 
    -> Budgeted Tickets to be Sold = tickets_benchmark 

    Calculations:
    -> tickets_predicted = tickets_actual + tickets_forcast
    -> tickets_actual_vs_budgeted = tickets_actual - tickets_benchmark
    -> tickets_predicted_vs_budgeted = tickets_predicted - tickets_benchmark



