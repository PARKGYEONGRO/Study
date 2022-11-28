import tkinter
import tkinter.font

window=tkinter.Tk()
window.title("YUN DAE HEE")
window.geometry("640x400+100+100")
window.resizable(True, True)

font=tkinter.font.Font(family="맑은 고딕", size=20, slant="roman")

label=tkinter.Label(window, text="파이썬 3.6", font=font)
label.pack()

window.mainloop()


# 이름	        의미	        기본값	        속성
# family	텍스트의 글꼴	TkDefaultFont	글꼴 이름
# size	텍스트의 글꼴 크기	    16	            상수
# weight	텍스트의 진하게	    normal	    normal, bold
# slant	텍스트의 기울임	            roman	roamn, italic
# underline	텍스트의 밑줄	        False	Boolean
# overstrike	텍스트의 취소선	    False	Boolean