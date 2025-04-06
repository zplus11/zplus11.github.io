---
title: Attendance & Marks at SGTB Khalsa College
date: 6 January, 2025
---

We used the data available on my college's website to analyse the
bahavious of students in terms of their attendance, marks, and relation
between them. The data is available at
https://sgtbkhalsa.online/uploadfiles/postings/notices in the
[*13.pdf*](https://sgtbkhalsa.online/uploadfiles/postings/notices/13.pdf),
[*14.pdf*](https://sgtbkhalsa.online/uploadfiles/postings/notices/14.pdf)
and
[*15.pdf*](https://sgtbkhalsa.online/uploadfiles/postings/notices/15.pdf)
files.

The attendance data contains attendance of students who took admission
in 2021, 2022, and 2023. It contains cumulative attendance of all
students. Marks data contains marks of students who took admission in
2022, 2023, and 2024. It contains marks in the most recent semester at
that time, for two categories --- IA and CA. In total, we have the data
of over 3,000 students; spanning almost 20,000 rows.

We analysed it using R, and the complete work can be found at
[AttendanceMarks.html](../../resources/AttendanceMarks.html){target="_blank"}.
CSV files are available upon request --- write to me at namantaggar
`[dot]` 11 `[at]` gmail `[dot]` com.

This blog also contains the simplified versions of commands used.

```
ggplot(yrwisestudents, aes(x="",
                           y=Total,
                           fill=Year)) +
  geom_bar(stat="identity",
           width=1)
```

<figure>
<img src="img/no.ofstudents.png"
alt="Number of students in each batch." />
<figcaption aria-hidden="true">Number of students in each
batch.</figcaption>
</figure>

Starting with the attendance dataset, first and foremost we compare the
year-wise attendance:

```
ggplot(attendance, aes(x="",
                       y=Percentage,
                       col=Year)) +
   geom_boxplot(linewidth=1) 
```

<figure>
<img src="img/boxplot3.png"
alt="Change in attendance metrics over the three years of a course." />
<figcaption aria-hidden="true">Change in attendance metrics over the
three years of a course.</figcaption>
</figure>

where it can be seen decreasing throughout the 3 years of a course. Out
of over 3000 students, only about 85 students have attended more than
85% of the lectures.

  Year   More than 66%   More than 85%
  ------ --------------- ---------------
  1st    222             26
  2nd    132             25
  3rd    111             33

Department-wise, we see that there is a variation in the number of
lectures being taken as well --- such as Zoology holding the most number
of lectures whereas B.A. (Prog.) the least.

```
attendanceDept %>% 
  pivot_longer(., cols=c(AvgAttendance,
                         AvgDelivered),
               names_to="Type",
               values_to="Score") %>% 
  ggplot(., aes(x=Department,
                y=Score,
                fill=Type)) +
  geom_bar(stat="identity",
           position="dodge")
```

<figure>
<img src="img/attdept1.png"
alt="Department-wise attendance and delivered lectures" />
<figcaption aria-hidden="true">Department-wise attendance and delivered
lectures</figcaption>
</figure>

More can be interpreted by the ratio between the 2 metrics for each
department. Average attendance then sits at around 30% for most of the
departments:

```
attendanceDept %>%
  mutate(Ratio=AvgAttendance/AvgDelivered) %>% 
  ggplot(., aes(x=Department,
                y=Ratio)) +
  geom_bar(stat="identity",
           position="dodge")
```

<figure>
<img src="img/attdept2.png"
alt="Department-wise attendance and delivered lectures" />
<figcaption aria-hidden="true">Department-wise attendance and delivered
lectures</figcaption>
</figure>

## Marks

As per marks, the analysis will be focused on only IA marks. See
Appendix A of the document for CA marks. Firstly, we show density plot
for IA marks. The distribution is more evenly spread for 1st and 2nd
year students.

```
ggplot(marks, aes(x=IAPercentage,
                  col=Year)) +
  geom_density(linewidth=1)
```

<figure>
<img src="img/densityIA.png"
alt="Density of IA marks among students." />
<figcaption aria-hidden="true">Density of IA marks among
students.</figcaption>
</figure>

Department-wise IA marks:

```
marks %>%
  group_by(Department) %>%
  summarise(AvgMarks=mean(IAPercentage,
                          na.rm=T)) %>% 
  ggplot(., aes(x=Department,
                y=AvgMarks)) + 
  geom_bar(stat="identity",
           position="dodge")
```

<figure>
<img src="img/marksdept.png" alt="Average marks in each department." />
<figcaption aria-hidden="true">Average marks in each
department.</figcaption>
</figure>

Most interesting of all, below is the relation between attendance
percentage of, and marks received by the students. Creating the dataset:

```
marks_avg <- marks %>%
  group_by(RollNo) %>%
  summarise(
    IA=mean(IAPercentage, na.rm=T),
    CA=mean(TotalScoreCA[TotalScoreCA>0])
  )
marksattendance <- merge(marks_avg, attendance, by="RollNo")
```

then using it to plot:

```
ggplot(
  marksattendance[sample(nrow(marksattendance), 1000), ],
  aes(x=as.numeric(Percentage),
      y=as.numeric(IA),
      color=Year)) +
  geom_point(alpha=.5)
```

<figure>
<img src="img/attvsIA.png"
alt="Relation between attendance and IA marks." />
<figcaption aria-hidden="true">Relation between attendance and IA
marks.</figcaption>
</figure>

Certainly, there is a direct relation among attendance and marks
obtained in CA/IA. One observation is that 2nd year students have
consistently scored more marks than 1st year students, specially in IA.

Detailed department-wise display of the same:

```
ggplot(
  marksattendance,
  aes(x=as.numeric(Percentage),
      y=as.numeric(IA),
      color=Year)) +
  geom_point(alpha=.5) +
  facet_wrap(~Department)
```

<figure>
<img src="img/attvsIADept.png"
alt="Department-wise relation between attendance and IA marks." />
<figcaption aria-hidden="true">Department-wise relation between
attendance and IA marks.</figcaption>
</figure>

## Authors

```
marksattendance %>% 
  filter(StudentName=="Naman Taggar" | StudentName=="DIPANSH CHAUDHARY") %>% 
  select(StudentName,
         RollNo,
         IA,
         CA,
         Percentage)
  )
```

  StudentName         RollNo        IA     CA     Percentage
  ------------------- ------------- ------ ------ ------------
  Naman Taggar        2022MTS1002   28.6   40.0   85.91
  DIPANSH CHAUDHARY   2022MTS1031   29.6   40.0   89.22