import React from 'react'
import { List as MUIList , ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, ItemButton, Slide, IconButton} from '@material-ui/core'
import {Delete, MoneyOff} from '@material-ui/icons'

import useStyles from './styles'

const List = () => {
  const classes = useStyles();

  const transactions = [
    {id : 1, type: "Income", category : "salary", amount : 50, date : "WED DEC 16"},
    {id : 2, type: "Expense", category : "pets", amount : 50, date : "WED DEC 17"},
    {id : 3, type: "Income", category : "Business", amount : 150, date : "WED DEC 18"}
  ];

  return (
    <MUIList dense={false} className={classes.list}>
      {
        transactions.map((transaction) => (
          <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={transaction.type === "Income" ? classes.avatarIncome : classes.avatarExpense}>
                  <MoneyOff />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label='delete' onClick="">
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        ))
      }
    </MUIList>
  )
}

export default List