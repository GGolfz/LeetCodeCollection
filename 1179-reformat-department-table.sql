SELECT DP.id
,(SELECT DPJAN.revenue FROM Department DPJAN WHERE DPJAN.id = DP.id AND DPJAN.month = 'Jan') AS Jan_Revenue
,(SELECT DPFEB.revenue FROM Department DPFEB WHERE DPFEB.id = DP.id AND DPFEB.month = 'Feb') AS Feb_Revenue
,(SELECT DPMAR.revenue FROM Department DPMAR WHERE DPMAR.id = DP.id AND DPMAR.month = 'Mar') AS Mar_Revenue
,(SELECT DPAPR.revenue FROM Department DPAPR WHERE DPAPR.id = DP.id AND DPAPR.month = 'Apr') AS Apr_Revenue
,(SELECT DPMAY.revenue FROM Department DPMAY WHERE DPMAY.id = DP.id AND DPMAY.month = 'May') AS May_Revenue
,(SELECT DPJUN.revenue FROM Department DPJUN WHERE DPJUN.id = DP.id AND DPJUN.month = 'Jun') AS Jun_Revenue
,(SELECT DPJUL.revenue FROM Department DPJUL WHERE DPJUL.id = DP.id AND DPJUL.month = 'Jul') AS Jul_Revenue
,(SELECT DPAUG.revenue FROM Department DPAUG WHERE DPAUG.id = DP.id AND DPAUG.month = 'Aug') AS Aug_Revenue
,(SELECT DPSEP.revenue FROM Department DPSEP WHERE DPSEP.id = DP.id AND DPSEP.month = 'Sep') AS Sep_Revenue
,(SELECT DPOCT.revenue FROM Department DPOCT WHERE DPOCT.id = DP.id AND DPOCT.month = 'Oct') AS Oct_Revenue
,(SELECT DPNOV.revenue FROM Department DPNOV WHERE DPNOV.id = DP.id AND DPNOV.month = 'Nov') AS Nov_Revenue
,(SELECT DPDEC.revenue FROM Department DPDEC WHERE DPDEC.id = DP.id AND DPDEC.month = 'Dec') AS Dec_Revenue
FROM (SELECT DISTINCT id FROM Department) AS DP
