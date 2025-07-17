---
title: Salaries of Professors
date: 14 February, 2025
---

I have worked on the `salaries` dataset twice --- once analysing and
visualising it, and secondly introducing a machine learning algorithm
upon it. The salaries dataset is defined as follows:---

> The 2008--09 nine-month academic salary for Assistant Professors, Associate Professors and Professors in a college in the U.S. The data were collected as part of the on-going effort of the college's administration to monitor salary differences between male and female faculty members.

During this blog post, we will note the disparity in salary based upon
gender of the faculty members. This is both evident in the
visualisations as well as confirmed by the machine learning model we
further introduce. This project was created using Python 3.12.5
(https://python.org).

We first start Python and import the packages required for this project.
These will include pandas used for data analysis and manipulation,
sklearn for applying machine learning, seaborn & matplotlib for data
visualisation.

```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn import preprocessing
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from matplotlib import pyplot as plt
import seaborn as sns
```

Now, we import and present the dataset, followed by giving a brief
outlook of it.

```python
salaries = pd.read_csv("salaries.csv")
salaries.head()
```

```python
#     row     rank discipline  yrs.since.phd  yrs.service gender  salary
#  0    1     Prof          B             19           18   Male  139750
#  1    2     Prof          B             20           16   Male  173200
#  2    3 AsstProf          B              4            3   Male   79750
#  3    4     Prof          B             45           39   Male  115000
#  4    5     Prof          B             40           41   Male  141500
```

We need to convert all data-values into numeric. Therefore, the
following changes need to be made: convert discipline column to take two
values (0 for A, 1 for B); convert gender column to take two values (0
for male, 1 for female); and convert rank column to take three values (0
for asst. prof., 1 for assoc. prof., 2 for prof.). Other than that, the
data does not require any other pre-processing.

```python
salaries["discipline"] = salaries["discipline"].map({"A": 0, "B": 1})
salaries["gender"] = salaries["gender"].map({"Male": 0, "Female": 1})
salaries["rank"] = salaries["rank"].map({"AsstProf": 0, "AssocProf": 1, "Prof": 2})
```

We give a visual presentation of the dataset now (see below). We notice
a disparity amongst the salaries of males and females. Moreover, direct
relations amongst all columns can be seen in the heatmap.

<figure>
<img src="img/salariesgender.png"
alt="Box plot of salaries by gender." />
<figcaption aria-hidden="true">Box plot of salaries by
gender.</figcaption>
</figure>

![Heat map of the columns.](img/salarieshm.png)

Furthermore, we show the scatter plot of salary vs. years of experience
and years since PhD, both by gender.

<figure>
<img src="img/svsyrsexp.png"
alt="Salary vs. years of experience, by gender." />
<figcaption aria-hidden="true">Salary vs. years of experience, by
gender.</figcaption>
</figure>

<figure>
<img src="img/svsyrsphd.png"
alt="Salary vs. years since PhD, by gender." />
<figcaption aria-hidden="true">Salary vs. years since PhD, by
gender.</figcaption>
</figure>

In both of these, it can firstly be seen that there are far less females
than males, amongst other observations. Out of 397 members, only 39 are
female and rest are males.

Of all female faculty members, 23% earn over 1 Cr. annually, and of all
male faculty members, 35.4% males earn over 1 Cr. annually,

Now, We propose a machine learning model, the independent variables will
be rank, discipline, years since PhD & of service, and salary. Gender
will be predicted.

```python
x = salaries.drop(["row", "gender"], axis=1)
# the column called row has nothing but serial numbers
y = salaries["gender"]
```

Now, we form the training and testing datassets.

```python
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.20, random_state=11, stratify=y)
```

Some columns have large values, and to make the computations easier they
need to get scaled down. For this purpose, we use the `preprocessing`
module and create a scaler in order to scale the data values.

```python
scaler = preprocessing.StandardScaler().fit(x_train)
x_train_scaled = scaler.transform(x_train)
```

Finally, we now train the dataset and bring our model to the test. If we
look at the `gender` column in the dataset, we note that there are far
more males than females:---

```python
salaries["gender"].value_counts()
```

```python
#  gender
#  0    358
#  1     39
#  Name: count, dtype: int64
```

Therefore, it is necessary to use `class_weight="balanced"` while
setting up the logistic regression model. This counters the heavy bias
towards males category in the dataset. However, due to this, the
accuracy on will get affected. We dropped down to an accuracy score of
around 60%.

```python
model = LogisticRegression(class_weight="balanced")
model.fit(x_train_scaled, y_train)
train_acc = model.score(x_train_scaled, y_train)
print("The Accuracy for Training Set is {}%".format(train_acc*100))
```

```python
#  The Accuracy for Training Set is 57.413249211356465%
```

Similarly, the accuracy for testing set can also be found out.

```python
test_acc = accuracy_score(y_test, y_pred)
print("The Accuracy for Test Set is {}%".format(test_acc*100))
```

```python
#  The Accuracy for Test Set is 63.74999999999999%
```

The classification report is as follows:

```python
x_test_scaled = scaler.transform(x_test)
y_pred = model.predict(x_test_scaled)
print(classification_report(y_test, y_pred))
```

```python
#                precision    recall  f1-score   support
#  
#             0       0.94      0.64      0.76        72
#             1       0.16      0.62      0.26         8
#  
#      accuracy                           0.64        80
#     macro avg       0.55      0.63      0.51        80
#  weighted avg       0.86      0.64      0.71        80
```

We can also introduce imaginary data-points in order to see the results
of our model. For example, in the following `dpt`, the first element of
the tuple is rank 2 which is Professor, second element is 1 which is
discipline B, third element means 30 years of experience, fourth element
means 25 years of experience, and fifth element means a salary of
\$180,000. The model predicts that this data-point is for gender male.

```python
dpt = (2, 1, 30, 25, 180000)
dpt_scaled = scaler.transform([dpt])
model.predict(dpt_scaled)
```

```python
array([0], dtype=int64)
```

However, if we edit the datapoint as follows:

```python
dpt = (2, 1, 30, 25, 65000)
dpt_scaled = scaler.transform([dpt])
model.predict(dpt_scaled)
```

```python
array([1], dtype=int64)
```

With only a drastic and negative change in the salary, the result is
female. This verifies the disparity amongst salaries of the professors
in the given dataset.

Originally, the model gave an accuracy of 90%. However, this was due to
the fact that the model was predicting all data-points to be males, and
there are around the same number of males (90%) in the data. With a
balanced class-weight, while the accuracy has decreased, but the model
now gives expected and natural results.