#ivri korem 2020
"""
description
"""

#init
#import
from tkinter import *
from tkinter.font import Font
import requests

#creating the BugHunter class
class BugHunter():
    def __init__(self, url="http://localhost:3000"):
        self.apiUrl = url

    def PopupReport(self):
        #preps
        popup = Tk()
        popup.title("Bug Report")
        popup.geometry('350x420')

        textFont = Font(popup, size=10, weight="bold")
        qFont = Font(popup, size=9, weight="bold")

        #creating the gui
        Text = Label(popup, text="This is a bug report form.\n you dont have to fill the fields if you dont want,\n But it will be appreciated.", font = textFont).grid(row=0)

        Label(popup).grid(row=1, ipady=1, ipadx=25)
        Label(popup, text="Enter the title for this report:", font=qFont).grid(row=2,column=0, sticky=W, ipady=1)
        Title = Entry(popup)
        Title.grid(row=3, sticky=W, ipady=1, ipadx=25)
        Label(popup, text="What is the priority of this report?", font=qFont).grid(row=4, sticky=W, ipady=1)
        Priority = Entry(popup)
        Priority.grid(row=5, sticky=W, ipady=1, ipadx=25)
        Label(popup, text="What is the device used for this report?", font=qFont).grid(row=6, sticky=W, ipady=1)
        Device = Entry(popup)
        Device.grid(row=7, sticky=W, ipady=1, ipadx=25)
        Label(popup, text="What where you doing and what was the bug?", font=qFont).grid(row=8, sticky=W, ipady=1)
        Description = Entry(popup)
        Description.grid(row=9, sticky=W, ipady=1, ipadx=25)
        Label(popup, text="What was expected to happen when the bug occurred?", font=qFont).grid(row=10, sticky=W, ipady=1)
        Expected = Entry(popup)
        Expected.grid(row=11, sticky=W, ipady=1, ipadx=25)
        Label(popup, text="What is your name?", font=qFont).grid(row=12, sticky=W, ipady=1)
        Reporter = Entry(popup)
        Reporter.grid(row=13, sticky=W, ipady=1, ipadx=25)
        Label(popup).grid(row=14, ipady=1, ipadx=25)

        SubmitButton = Button(popup, text="Submit", font=textFont, command=lambda: self.sendReport(Title.get(), Priority.get(), Device.get(), Description.get(), Expected.get(), Reporter.get(), popup), padx=50, pady=5).grid(row=15)

        #mainloop
        popup.mainloop()
    
    def sendReport(self, Title, Priority, Device, Description, Expected, Reporter, window):
        #creating the body of the request
        body={}
        body['title'] = Title
        body['priority']= Priority
        body['device']= Device
        body['description']= Description
        body['expected'] = Expected
        body['reporter']= Reporter

        #sending the request
        requests.post(self.apiUrl + "/bugs", json=body)

        #closing the window
        window.destroy()

###example
bh = BugHunter()

try:
    t("defef")
except:
    bh.PopupReport()